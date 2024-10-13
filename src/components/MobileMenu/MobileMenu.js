import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
  {
    id: 1,
    title: "الرئيسية",
    link: "/home",
    submenu: [
      {
        id: 11,
        title: "صفحتنا الرئيسية",
        link: "/home",
      },
      {
        id: 12,
        title: "شركة الزعيم للدعاية والاعلان",
        link: "/home_software_company",
      },
      {
        id: 13,
        title: "للاستشارت",
        link: "/home_business_consulting",
      },
    ],
  },
  {
    id: 3,
    title: "صفحتنا",
    link: "/portfolio",
    submenu: [
      {
        id: 31,
        title: "قيد التنفيذ",
        link: "/portfolio",
      },
      {
        id: 3222,
        title: "أسعارنا",
        link: "/pricing",
      },
      {
        id: 322,
        title: "من نحن",
        link: "/about",
      },
      {
        id: 345,
        title: "فريق العمل",
        link: "/team",
      },
      {
        id: 3454,
        title: "تفاصيل الفريق",
        link: "/team-single/Atticus-Sterling",
      },
    ],
  },
  {
    id: 4,
    title: "خدماتنا",
    link: "/service",
    submenu: [
      {
        id: 41,
        title: "خدماتنا",
        link: "/service",
      },
      {
        id: 42,
        title: "تفاصيل الخدمات",
        link: "/service-single/IT-Management-Services",
      },
    ],
  },
  {
    id: 5,
    title: "معرض أعمالنا",
    link: "/porfolio",
    submenu: [
      {
        id: 51,
        title: "أهم أعمالنا",
        link: "/portfolio",
      },
      {
        id: 52,
        title: "تفاصيل الأعمال",
        link: "/portfolio_details/Explore-Our-IT-Solutions",
      },
    ],
  },
  {
    id: 6,
    title: "المدونة",
    link: "/blog",
    submenu: [
      {
        id: 61,
        title: "المدونة",
        link: "/blog",
      },
      {
        id: 62,
        title: "تفاصيل المدونة",
        link: "/blog-single/How-Our-Software-Solutions-Drive-Insights.",
      },
    ],
  },
  {
    id: 88,
    title: "للتواصل",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <ul className="main_menu_list clearfix">
      {menus.map((item, mn) => {
        return (
          <ListItem className={item.id === openId ? "active" : null} key={mn}>
            {item.submenu ? (
              <Fragment>
                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                  {item.title}
                  <i
                    className={
                      item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                  ></i>
                </p>
                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                  <List className="subMenu">
                    <Fragment>
                      {item.submenu.map((submenu, i) => {
                        return (
                          <ListItem key={i}>
                            <Link
                              onClick={ClickHandler}
                              className="active"
                              to={submenu.link}
                            >
                              {submenu.title}
                            </Link>
                          </ListItem>
                        );
                      })}
                    </Fragment>
                  </List>
                </Collapse>
              </Fragment>
            ) : (
              <Link className="active" to={item.link}>
                {item.title}
              </Link>
            )}
          </ListItem>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
