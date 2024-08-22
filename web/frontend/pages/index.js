import {
  Layout,
  LegacyCard,
  Page,
} from "@shopify/polaris";
import { OrderGraphs } from "../components";

export default function HomePage() {
 
  return (
    <Page narrowWidth>
    <div className="home-section">
    <div className="graphs-section">
    <OrderGraphs />
    </div>
    <div className="cards-section">

    </div>
    <div className="order-details-section">

    </div>
    </div>
    </Page>
  );
}