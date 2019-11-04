import React, { Component } from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: ShopData };
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div>Shop Page</div>
        {this.state.collections.map(item => (
          <div key={item.id}>
            <CollectionPreview title={item.title} items={item.items} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
