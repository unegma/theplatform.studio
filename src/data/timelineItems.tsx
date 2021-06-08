import {TimelineItemModel} from "react-chrono/dist/models/TimelineItemModel";

const timelineItems: Array<TimelineItemModel> = [{
  title: "May 2020",
  cardTitle: "NFT 1",
  cardSubtitle:"Subtitle of NFT 1",
  cardDetailedText: "test",
  media: {
    type: "IMAGE",
    source: {
      url: "https://picsum.photos/350/200"
    }
  }
},{
  title: "June 2020",
  cardTitle: "NFT 2",
  cardSubtitle:"Subtitle of NFT 2",
  cardDetailedText: "test2",
  media: {
    type: "IMAGE",
    source: {
      url: "https://picsum.photos/351/200"
    }
  }
},{
  title: "July 2020",
  cardTitle: "NFT 3",
  cardSubtitle:"Subtitle of NFT 3",
  cardDetailedText: "test3",
  media: {
    type: "IMAGE",
    source: {
      url: "https://picsum.photos/352/200"
    }
  }
}];

export default timelineItems;
