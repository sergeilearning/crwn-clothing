import React, { Component } from "react";
import { connect } from "react-redux";

import { selectShopCollections } from "../../redux/shop/shop.selector.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map(item => (
        <div key={item.id}>
          <CollectionPreview title={item.title} items={item.items} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});
export default connect(mapStateToProps)(ShopPage);
