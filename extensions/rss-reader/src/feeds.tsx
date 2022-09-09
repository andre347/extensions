import { ActionPanel, List, showToast, Icon, Color, Action, LocalStorage, Toast } from "@raycast/api";
import { useEffect, useState } from "react";
import { StoriesList } from "./stories";
import AddFeedForm from "./subscription-form";

export interface Feed {
  url: string;
  title: string;
  icon: string;
}

function FeedsList() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchFeeds() {
    setLoading(true);
    setFeeds(await getFeeds());
    setLoading(false);
  }

  useEffect(() => {
    fetchFeeds();
  }, []);

  const removeFeed = async (index: number) => {
    const removedFeed = feeds.at(index) as Feed;
    const feedItems = [...feeds];
    feedItems.splice(index, 1);

    await LocalStorage.setItem("feeds", JSON.stringify(feedItems));
    setFeeds(feedItems);
    await showToast({
      style: Toast.Style.Success,
      title: "Unsubscribed from the feed!",
      message: removedFeed.title,
    });
  };

  const moveFeed = (index: number, change: number) => {
    if (index + change < 0 || index + change > feeds.length - 1) {
      return;
    }
    const feedItems = [...feeds] as Feed[];
    [feedItems[index], feedItems[index + change]] = [feedItems[index + change], feedItems[index]];
    setFeeds(feedItems);
  };

  return (
    <List
      isLoading={loading}
      searchBarPlaceholder="Search feeds..."
      actions={
        <ActionPanel>
          <Action.Push
            title="Add Feed"
            target={<AddFeedForm callback={setFeeds} />}
            icon={{ source: Icon.Plus, tintColor: Color.Green }}
            shortcut={{ modifiers: ["cmd"], key: "n" }}
          />
        </ActionPanel>
      }
    >
      {feeds.map((item, index) => (
        <List.Item
          key={item.url}
          title={item.title}
          icon={item.icon}
          actions={
            <ActionPanel>
              <ActionPanel.Section title={item.title}>
                <Action.Push
                  title="Open Feed"
                  target={<StoriesList feeds={[item]} />}
                  icon={{ source: Icon.BlankDocument, tintColor: Color.Green }}
                />
              </ActionPanel.Section>
              <ActionPanel.Section>
                <Action.Push
                  title="Add Feed"
                  target={<AddFeedForm callback={setFeeds} />}
                  icon={{ source: Icon.Plus, tintColor: Color.Green }}
                  shortcut={{ modifiers: ["cmd"], key: "n" }}
                />
                <Action
                  title="Remove Feed"
                  onAction={() => removeFeed(index)}
                  icon={{ source: Icon.Trash, tintColor: Color.Red }}
                  shortcut={{ modifiers: ["cmd", "shift"], key: "d" }}
                />
              </ActionPanel.Section>
              {feeds.length > 1 && (
                <ActionPanel.Section>
                  {index != 0 && (
                    <Action
                      title="Move Up in List"
                      onAction={() => moveFeed(index, -1)}
                      icon={{ source: Icon.ChevronUp }}
                      shortcut={{ modifiers: ["cmd", "shift"], key: "arrowUp" }}
                    />
                  )}
                  {index != feeds.length - 1 && (
                    <Action
                      title="Move Down in List"
                      icon={{ source: Icon.ChevronDown }}
                      onAction={() => moveFeed(index, 1)}
                      shortcut={{ modifiers: ["cmd", "shift"], key: "arrowDown" }}
                    />
                  )}
                </ActionPanel.Section>
              )}
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}

export async function getFeeds() {
  const feedsString = (await LocalStorage.getItem("feeds")) as string;
  if (feedsString === undefined) {
    return [];
  }
  const feedItems = JSON.parse(feedsString) as Feed[];
  return feedItems;
}

export default FeedsList;
