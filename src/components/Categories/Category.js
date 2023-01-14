import React from "react"
import Block from "../BlockNews/BlockNews";

const Category = (items)=> items.map(c => <Block id ={c.id} header={c.header} news={c.news} img={c.img} />)

export default Category;