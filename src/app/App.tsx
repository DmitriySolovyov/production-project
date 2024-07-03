import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import AboutPage from "../pages/AboutPage/ui/AboutPage";
import React, {Suspense, useContext, useState} from "react";
import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;