import React, {useEffect, useState} from "react";
import CategoryItems from "./cateoryItems"
import {apiRoot} from "../../constants";
import httpService from "../../form/httpService";

function AllItems() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await httpService.get(apiRoot + '/category/');
      setCategory(res.data);
    }
    getUrl();
  }, []);
  return (
    <React.Fragment>
      {category.map(cat => <CategoryItems key={cat.id} cat={cat.name}/>)}
    </React.Fragment>
  );
}

export default AllItems;
