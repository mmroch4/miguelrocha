import { Header } from "../(components)/Header";
import { Card } from "./Card";

export default function Activity() {
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <Header
        title="My Activity"
        subtitle="Keep track of my activity through GitHub"
      />

      <section
        id="activity-section"
        className="w-full flex flex-col items-center gap-2"
      >
        <Card
          to="https://github.com/flpgst/scratchpay-api/pull/1"
          title="Refactored and fixed some inconsistencies in the code"
          date={new Date("4-9-2023")}
          tags={["pull-request", "open"]}
        />

        <Card
          to="https://github.com/mmroch4/scratchpay-api/commits/e0c0344f6c5ff36afdd62a0600a4a7a48b06c16e"
          title="style: code refactored"
          date={new Date("4-9-2023")}
          tags={["commit", "style"]}
        />

        <Card
          to="https://github.com/mmroch4/scratchpay-api"
          title="flpgst/scratchpay-api"
          date={new Date("4-9-2023")}
          tags={["fork"]}
        />
      </section>
    </main>
  );
}
