import {Navbar} from "../../ui/components/Navbar";
import {Route, Routes} from "react-router-dom";
import {MarvelPage} from "../pages/MarvelPage";
import {DcPage} from "../pages/DcPage";
import {SearchPage} from "../pages/SearchPage";
import React from "react";
import {HeroScreen} from "../pages/HeroPage";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className={"container"}>
        <Routes>
          <Route path="marvel" element={<MarvelPage/>}/>
          <Route path="dc" element={<DcPage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path="hero/:id" element={<HeroScreen/>}/>
          <Route path="/" element={<MarvelPage/>}/>
        </Routes>
      </div>
    </>
  );
};