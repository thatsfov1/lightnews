import React from "react";
import classes from "../Friends/Friends.module.css";

const Paginator =({totalCount,pageSize,currentPage,onPageChanged})=>{
    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

        return <div>
            {slicedPages.map(p => {
                return <span className={currentPage === p ? classes.selectedPage : undefined}

                             onClick={(e) => {
                                 onPageChanged(p)
                             }}> {p}</span>
            })
            }
            </div>
         }


export default Paginator;