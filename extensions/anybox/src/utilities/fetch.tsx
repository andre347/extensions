import fetch, { FetchError } from "node-fetch";
import { closeMainWindow, showToast, Toast, open, getApplications } from "@raycast/api";

interface SidebarItemProp {
  id: string; // UUID
  name: string;
  color: string; // HEX color
  icon: string; // SF Symbol Name
  count: number; // Number of links in the list.
  type: "filter" | "collection" | "preset";
}

interface PresetProp extends SidebarItemProp {
  type: "preset";
}

interface FilterProp extends SidebarItemProp {
  type: "filter";
}

export interface CollectionProp extends SidebarItemProp {
  type: "collection";
  heading?: string;
}

export interface AnydockProfile {
  id: string; // UUID
  icon: string; // SF Symbol Name
  documentCount: number; // Number of documents in the profile
  name: string;
}
async function isAnyboxInstalled() {
  const applications = await getApplications();
  return applications.some(({ bundleId }) => bundleId === "cc.anybox.Anybox");
}

export async function checkForAnyboxInstallation() {
  if (!(await isAnyboxInstalled())) {
    const options: Toast.Options = {
      style: Toast.Style.Failure,
      title: "Anybox is not installed.",
      message: "Install it from here.",
      primaryAction: {
        title: "Anybox on Mac App Store",
        onAction: (toast) => {
          open("https://apps.apple.com/app/anybox-the-bookmark-manager/id1593408455");
          toast.hide();
        },
      },
    };

    await showToast(options);
  }
}

function request(path: string, method: string, body?: any, closeWindow = false) {
  return fetch(`http://localhost:6391/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        if (closeWindow) {
          closeMainWindow({ clearRootSearch: true });
        }
        return res.json();
      } else {
        return res.text().then((text) => {
          throw new Error(text);
        });
      }
    })
    .catch((error) => {
      handleError(error);
    });
}

export function handleError(error: FetchError) {
  checkForAnyboxInstallation();

  if (error.code === "ECONNREFUSED") {
    const options: Toast.Options = {
      style: Toast.Style.Failure,
      title: "Connection Failed",
      message: "It looks like Anybox is not running.",
      primaryAction: {
        title: "Open Anybox",
        onAction: (toast) => {
          open("open", "cc.anybox.Anybox");
          toast.hide();
        },
      },
    };

    showToast(options);
  } else {
    showToast({
      style: Toast.Style.Failure,
      title: "Command Failed",
      message: error.message,
    });
  }
}

const GET = (path: string, closeWindow = false) => request(path, "GET", undefined, closeWindow);

const POST = (path: string, data: object, closeWindow = false) => {
  return request(path, "POST", data, closeWindow);
};

export async function postAndCloseMainWindow(command: string, data: object = {}) {
  return POST(`${command}`, data, true);
}

export function getAndCloseMainWindow(command: string) {
  return GET(`${command}`, true);
}

export async function fetchCollections() {
  return GET("collections") as Promise<CollectionProp[]>;
}

export async function fetchProfiles() {
  return GET("anydock-profiles") as Promise<[AnydockProfile]>;
}

export async function getCollections() {
  return GET("collections") as Promise<[CollectionProp]>;
}

export async function getFilters() {
  return GET("filters") as Promise<[FilterProp]>;
}

export async function getPresetSidebarItems() {
  return GET("presets") as Promise<[PresetProp]>;
}

export async function fetchSidebar() {
  const presets = getPresetSidebarItems();
  const filters = getFilters();
  const collections = getCollections();
  return Promise.all([presets, filters, collections]).then(([presets, filters, collections]) => {
    const result = [...presets, ...filters, ...collections];
    return result;
  });
}
