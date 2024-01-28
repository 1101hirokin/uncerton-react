import React from "react";
import "./components/global.css";
import { Button, Card, Icon, IconName, Text } from "./components";
import { Colors, Elevation } from "./api";

const App = () => {
  return (
    <div style={{ padding: "32px 0" }}>
      <_ComponentDisplayer title="Component: Text">
        <Text appearance="h1">Heading Lv.1</Text>
        <Text appearance="h2">Heading Lv.2</Text>
        <Text appearance="h3">Heading Lv.3</Text>
        <Text appearance="h4">Heading Lv.4</Text>
        <Text appearance="h5">Heading Lv.5</Text>
        <Text appearance="h6">Heading Lv.6</Text>
        <Text appearance="subtitle1">Subtitle Lv.1</Text>
        <Text appearance="subtitle2">Subtitle Lv.2</Text>
        <Text appearance="body1">Body Lv.1</Text>
        <Text appearance="body2">Body Lv.2</Text>
        <Text appearance="button">Button</Text>
        <Text appearance="caption">Caption</Text>
        <Text appearance="overline">Overline</Text>
      </_ComponentDisplayer>

      <_ComponentDisplayer title="Component: Icon">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 18px)",
            gap: 8,
          }}
        >
          {_iconNames.map((iconName) => {
            return (
              <div
                key={iconName}
                style={{
                  width: 18,
                  aspectRatio: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name={iconName} />
              </div>
            );
          })}
        </div>
      </_ComponentDisplayer>

      <_ComponentDisplayer title="Component: Card (& Elevation)">
        <div
          style={{
            display: "grid",
            width: "100%",
            maxWidth: "480px",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}
        >
          {((): React.ReactNode[] => {
            const cards: React.ReactNode[] = [];
            for (let i = 0; i < 23; i++) {
              cards.push(
                <Card
                  key={i}
                  elevation={i as Elevation}
                  border
                  style={{ aspectRatio: 8 / 5 }}
                />
              );
            }
            return cards;
          })()}
        </div>
      </_ComponentDisplayer>

      <_ComponentDisplayer title="API: Color">
        <div
          style={{
            display: "grid",
            maxWidth: "320px",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: 6,
          }}
        >
          {((): React.ReactNode[] => {
            const gridItems: React.ReactNode[] = [];
            const keys: (keyof typeof Colors)[] = [
              "red",
              "orange",
              "yellow",
              "lime",
              "green",
              "teal",
              "blue",
              "purple",
              "pink",
              "gray",
            ];
            const levels: (keyof typeof Colors.red)[] = [
              50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
            ];
            keys.forEach((key) => {
              levels.forEach((level) => {
                gridItems.push(
                  <div
                    key={`${key}-${level}`}
                    style={{
                      width: "100%",
                      aspectRatio: 1,
                      backgroundColor: Colors[key][level],
                      borderRadius: 4,
                    }}
                  />
                );
              });
            });
            return gridItems;
          })()}
        </div>
      </_ComponentDisplayer>

      <_ComponentDisplayer title="Component: Button">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 100%)",
            gap: 8,
          }}
        >
          <div>
            <Button color="#0050ff">hello</Button>
            <Button color="#0050ff" appearance="text">
              hello
            </Button>
            <Button color="#0050ff" appearance="outlined">
              hello
            </Button>
          </div>
          <div>
            <Button
              textColor="rgb(255, 237, 239)"
              color="rgb(241, 0, 32)"
              shape="angular"
            >
              hello
            </Button>
            <Button color="#0050ff" appearance="text" shape="angular">
              hello
            </Button>
            <Button color="#0050ff" appearance="outlined" shape="angular">
              hello
            </Button>
          </div>
          <div>
            <Button color="#0050ff" shape="circular">
              hello
            </Button>
            <Button color="#0050ff" appearance="text" shape="circular">
              hello
            </Button>
            <Button color="#0050ff" appearance="outlined" shape="circular">
              hello
            </Button>
          </div>
          <div>
            <Button color="#fab845" block>
              hello
            </Button>
            <Button color="#fab845" block appearance="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              minus cum ad fugiat quasi voluptatibus unde, quis repudiandae
              corrupti quo, molestiae illum sapiente ullam aperiam neque
              quibusdam. Doloribus, nisi ratione!
            </Button>
            <Button color="#fab845" block appearance="outlined" wrapText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos
              maxime deleniti a fugit vero eligendi soluta aspernatur sunt.
              Pariatur adipisci temporibus praesentium libero commodi doloremque
              id, tempora aperiam aliquid.
            </Button>
          </div>
        </div>
      </_ComponentDisplayer>
    </div>
  );
};

export default App;

const _ComponentDisplayer = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: 32,
      }}
    >
      <div
        style={{
          width: "calc(100% - 32px)",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <Text appearance="h4" element="h1">
            {`▮ ${title}`}
          </Text>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const _iconNames: IconName[] = [
  "apps",
  "archive",
  "area_control.pan",
  "area_control.zoom.in",
  "area_control.zoom.out",
  "arrow.down",
  "arrow.left",
  "arrow.right",
  "arrow.up",
  "arthmetic.divide",
  "arthmetic.equal",
  "arthmetic.minus",
  "arthmetic.multiply",
  "arthmetic.plus",
  "barcode",
  "battery_status.charging",
  "battery_status.full",
  "battery_status.low",
  "battery_status.middle",
  "battery_status.warning",
  "battery_status.zero",
  "book.close",
  "book.open",
  "bookmark.add",
  "bookmark.fill",
  "bookmark.remove",
  "bookmark",
  "brackets.brace",
  "brackets.paren",
  "brackets.square",
  "calender",
  "camera",
  "char.alphabet",
  "char.hiragana",
  "char.number",
  "chart.bar",
  "chart.line",
  "chart.pie",
  "chart.scatter",
  "chat",
  "check",
  "chevron.down",
  "chevron.left",
  "chevron.right",
  "chevron.up",
  "clipboard",
  "close",
  "credit_card",
  "crop",
  "currency.jpy",
  "currency.usd",
  "delete",
  "device.mobile",
  "device.pc",
  "device.watch",
  "direction",
  "document.search",
  "document",
  "dots.horizontal",
  "dots.vertical",
  "draggable.horizontal",
  "draggable.vertical",
  "eval.bad.fill",
  "eval.bad",
  "eval.good.fill",
  "eval.good",
  "file.download",
  "file.export",
  "file.import",
  "file.upload",
  "filesystem.directory",
  "filesystem.file",
  "filesystem.zip",
  "fingerprint",
  "geonav.fill",
  "geonav",
  "git.commit",
  "git.fork",
  "git.merge",
  "groomcat",
  "groomcat_1",
  "history.redo",
  "history",
  "history.undo",
  "home",
  "image",
  "info",
  "input.keyboard",
  "input.microphone",
  "input.mouse",
  "key",
  "label.filled",
  "label",
  "link",
  "list.add",
  "list.remove",
  "list",
  "love.fill",
  "love.half",
  "love",
  "mail",
  "map.paper",
  "map.pin",
  "mark.asterisk",
  "mark.at",
  "mark.coron",
  "mark.exclamation",
  "mark.percentage",
  "mark.question",
  "mark.semicoron",
  "media.mute",
  "media.next",
  "media.pause",
  "media.play",
  "media.prev",
  "media.volume_0",
  "media.volume_1",
  "media.volume_2",
  "media.volume_3",
  "menu",
  "money.bill",
  "money.coin",
  "network_status.wired",
  "network_status.wireless.full",
  "network_status.wireless.low",
  "network_status.wireless.middle",
  "network_status.wireless.off",
  "network_status.wireless.warning",
  "network_status.wireless.zero",
  "notice.alert",
  "notice.error",
  "notice.hint",
  "notice.info",
  "notice.ok",
  "notification",
  "object_align.x.center",
  "object_align.x.left",
  "object_align.x.right",
  "object_align.y.bottom",
  "object_align.y.center",
  "object_align.y.top",
  "open_newtab",
  "password.locked",
  "password.unlocked",
  "pencil",
  "phone.history",
  "phone.stand-by",
  "phone.talking",
  "plane",
  "print",
  "qrcode",
  "quote.double",
  "quote.single",
  "reload",
  "report",
  "route",
  "rss",
  "search",
  "send",
  "setting",
  "shape.circle",
  "shape.hexagon",
  "shape.hexagon.tilted",
  "shape.pentagon",
  "shape.rectangle",
  "shape.square",
  "shape.triangle.reverse",
  "shape.triangle",
  "share",
  "shield",
  "shop.cart",
  "social.block",
  "social.mute",
  "star.fill",
  "star.half",
  "star",
  "switch.on",
  "table.column",
  "table.row",
  "table",
  "text.bold",
  "text.italic",
  "text.strike",
  "text",
  "text_align.center",
  "text_align.justify",
  "text_align.left",
  "text_align.right",
  "thumbtack",
  "timeline",
  "user.add",
  "user.group",
  "user.minus",
  "user",
  "video.screen.default",
  "video.screen.full",
  "video.screen.pinp",
  "video",
  "videocam",
  "weather.cloud",
  "weather.moon",
  "weather.rain",
  "weather.rain_1",
  "weather.sun",
  "window_control.close",
  "window_control.default",
  "window_control.maximize",
  "window_control.minimize",
];
