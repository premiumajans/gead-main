import Image from "next/image";
import {PropsWithChildren, useState} from "react";
import Link from "next/link";

const HeaderWraper = ({children}: PropsWithChildren) => {
    return (
        <>
            <header
                id="header"
                data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 108, 'stickySetTop': '-109px', 'stickyChangeLogo': true}"
                style={{height: "201px"}}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                >
                    <h3 style={{fontStyle: 'italic', color: '#1d388c'}}>GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai
                        Birliyi </h3>
                </div>
                <div className="header-body" style={{top: "0px"}}>
                    <div className="header-container custom-container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-row">
                                    <div
                                        className="header-logo"
                                        style={{width: "165px", height: "165px"}}
                                    >
                                        <Link href="/">
                                            <Image
                                                alt="Logo"
                                                width="165"
                                                height="165"
                                                data-sticky-width="82"
                                                data-sticky-height="82"
                                                data-sticky-top="94"
                                                src="/img/logo.png"
                                                style={{top: "0px", width: "165px", height: "165px"}}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="header-column justify-content-end">
                                <div className="header-row pt-3">
                                    <nav className="header-nav-top">
                                        {" "}
                                        <ul className="nav nav-pills">
                                            {" "}
                                            <li className="nav-item dropdown nav-item-left-border d-none d-sm-block nav-item-left-border-remove nav-item-left-border-md-show">
                                                {" "}
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    id="dropdownLanguage"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    {" "}
                                                    <Image
                                                        width={16}
                                                        height={11}
                                                        src="/img/blank.gif"
                                                        className="flag flag-us"
                                                        alt="English"
                                                    />{" "}
                                                    English <i className="fas fa-angle-down"></i>{" "}
                                                </a>{" "}
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownLanguage"
                                                >
                                                    {" "}
                                                    <a className="dropdown-item" href="#">
                                                        <Image
                                                            width={16}
                                                            height={11}
                                                            src="/img/blank.gif"
                                                            className="flag flag-az"
                                                            alt=""
                                                        />{" "}
                                                        Azərbaycan
                                                    </a>{" "}
                                                    <a className="dropdown-item" href="#">
                                                        <Image
                                                            width={16}
                                                            height={11}
                                                            src="/img/blank.gif"
                                                            className="flag flag-us"
                                                            alt="English"
                                                        />{" "}
                                                        English
                                                    </a>{" "}
                                                    <a className="dropdown-item" href="#">
                                                        <Image
                                                            width={16}
                                                            height={11}
                                                            src="/img/blank.gif"
                                                            className="flag flag-ru"
                                                            alt="English"
                                                        />{" "}
                                                        Française
                                                    </a>{" "}
                                                </div>
                                                {" "}
                                            </li>
                                            {" "}
                                        </ul>
                                        {" "}
                                    </nav>
                                    <div className="header-nav-features">
                                        {" "}
                                        <div className="header-nav-feature header-nav-features-search d-inline-flex">
                                            {" "}
                                            <a
                                                style={{cursor: 'pointer'}}
                                                className="header-nav-features-toggle text-decoration-none"
                                                data-focus="headerSearch"
                                            >
                                                <i className="fas fa-search header-nav-top-icon"></i>
                                            </a>{" "}
                                            <div
                                                className={"header-nav-features-dropdown "}
                                                id="headerTopSearchDropdown"
                                            >
                                                {" "}
                                                <form
                                                    role="search"
                                                    method="get"
                                                >
                                                    {" "}
                                                    <div className="simple-search input-group">
                                                        {" "}
                                                        <input
                                                            className="form-control text-1"
                                                            id="headerSearch"
                                                            name="q"
                                                            type="search"
                                                            value=""
                                                            placeholder="Search..."
                                                        />{" "}
                                                        <button className="btn" type="submit">
                                                            {" "}
                                                            <i className="fas fa-search header-nav-top-icon"></i>{" "}
                                                        </button>
                                                        {" "}
                                                    </div>
                                                    {" "}
                                                </form>
                                                {" "}
                                            </div>
                                            {" "}
                                        </div>
                                        {" "}
                                    </div>
                                </div>

                                <div className="header-row">
                                    <div className="header-nav pt-1">
                                        <div
                                            className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                            <nav className="collapse">
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="index.html"
                                                        >
                                                            {" "}
                                                            Ana səhifə
                                                            <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="index.html">
                                                                    Təhsil
                                                                </a>
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="index.html#demos"
                                                                >
                                                                    {" "}
                                                                    Demos{" "}
                                                                    <span className="tip tip-dark">hot</span>{" "}
                                                                </a>{" "}
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Classic<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-classic.html"
                                                                        >
                                                                            Classic - Original
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-classic-color.html"
                                                                        >
                                                                            Classic - Color
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-classic-light.html"
                                                                        >
                                                                            Classic - Light
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-classic-video.html"
                                                                        >
                                                                            Classic - Video
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-classic-video-light.html"
                                                                        >
                                                                            Classic - Video - Light
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Corporate
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate.html"
                                                                        >
                                                                            Corporate - Version 1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-2.html"
                                                                        >
                                                                            Corporate - Version 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-3.html"
                                                                        >
                                                                            Corporate - Version 3
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-4.html"
                                                                        >
                                                                            Corporate - Version 4
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-5.html"
                                                                        >
                                                                            Corporate - Version 5
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-6.html"
                                                                        >
                                                                            Corporate - Version 6
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-7.html"
                                                                        >
                                                                            Corporate - Version 7
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-8.html"
                                                                        >
                                                                            Corporate - Version 8
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-9.html"
                                                                        >
                                                                            Corporate - Version 9
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-corporate-10.html"
                                                                        >
                                                                            Corporate - Version 10
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index.html#demos"
                                                                        >
                                                                            More...
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Portfolio
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-portfolio.html"
                                                                        >
                                                                            Portfolio - Version 1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-portfolio-2.html"
                                                                        >
                                                                            Portfolio - Version 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-portfolio-3.html"
                                                                        >
                                                                            Portfolio - Version 3
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-portfolio-4.html"
                                                                        >
                                                                            Portfolio - Version 4
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-portfolio-5.html"
                                                                        >
                                                                            Portfolio - Version 5
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Blog<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-blog.html"
                                                                        >
                                                                            Blog - Version 1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-blog-2.html"
                                                                        >
                                                                            Blog - Version 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-blog-3.html"
                                                                        >
                                                                            Blog - Version 3
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-blog-4.html"
                                                                        >
                                                                            Blog - Version 4
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-blog-5.html"
                                                                        >
                                                                            Blog - Version 5
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    One Page
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-one-page.html"
                                                                        >
                                                                            One Page Original
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown dropdown-mega">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="elements.html"
                                                        >
                                                            {" "}
                                                            Təhsil <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <div className="dropdown-mega-content">
                                                                    <div className="row">
                                                                        <div className="col-lg-3">
<span className="dropdown-mega-sub-title">
Elements 1
</span>
                                                                            <ul className="dropdown-mega-sub-nav">
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-accordions.html"
                                                                                    >
                                                                                        Accordions
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-alerts.html"
                                                                                    >
                                                                                        Alerts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-animations.html"
                                                                                    >
                                                                                        Animations
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-arrows.html"
                                                                                    >
                                                                                        Arrows
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-badges.html"
                                                                                    >
                                                                                        Badges
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-before-after.html"
                                                                                    >
                                                                                        Before / After
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-blockquotes.html"
                                                                                    >
                                                                                        Blockquotes
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-buttons.html"
                                                                                    >
                                                                                        Buttons
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-call-to-action.html"
                                                                                    >
                                                                                        Call to Action
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-cards.html"
                                                                                    >
                                                                                        Cards
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-carousels.html"
                                                                                    >
                                                                                        Carousels
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-cascading-images.html"
                                                                                    >
                                                                                        Cascading Images
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-3">
<span className="dropdown-mega-sub-title">
Elements 2
</span>
                                                                            <ul className="dropdown-mega-sub-nav">
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-content-rotate.html"
                                                                                    >
                                                                                        Content Rotate
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-countdowns.html"
                                                                                    >
                                                                                        Countdowns
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-counters.html"
                                                                                    >
                                                                                        Counters
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-dividers.html"
                                                                                    >
                                                                                        Dividers
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-forms.html"
                                                                                    >
                                                                                        Forms
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-headings.html"
                                                                                    >
                                                                                        Headings
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-icons.html"
                                                                                    >
                                                                                        Icons
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-icon-boxes.html"
                                                                                    >
                                                                                        Icon Boxes
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-image-frames.html"
                                                                                    >
                                                                                        Image Frames
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-image-gallery.html"
                                                                                    >
                                                                                        Image Gallery
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-image-hotspots.html"
                                                                                    >
                                                                                        Image Hotspots
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-lightboxes.html"
                                                                                    >
                                                                                        Lightboxes
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-3">
<span className="dropdown-mega-sub-title">
Elements 3
</span>
                                                                            <ul className="dropdown-mega-sub-nav">
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-lists.html"
                                                                                    >
                                                                                        Lists
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-maps.html"
                                                                                    >
                                                                                        Maps
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-medias.html"
                                                                                    >
                                                                                        Medias
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-modals.html"
                                                                                    >
                                                                                        Modals
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-parallax.html"
                                                                                    >
                                                                                        Parallax
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-particles.html"
                                                                                    >
                                                                                        Particles
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-posts.html"
                                                                                    >
                                                                                        Posts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-pricing-tables.html"
                                                                                    >
                                                                                        Pricing Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-process.html"
                                                                                    >
                                                                                        Process
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-progressbars.html"
                                                                                    >
                                                                                        Progress Bars
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-random-images.html"
                                                                                    >
                                                                                        Random Images
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-read-more.html"
                                                                                    >
                                                                                        Read More
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-3">
<span className="dropdown-mega-sub-title">
Elements 4
</span>
                                                                            <ul className="dropdown-mega-sub-nav">
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-sections.html"
                                                                                    >
                                                                                        Sections
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-shape-dividers.html"
                                                                                    >
                                                                                        Shape Dividers
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-star-ratings.html"
                                                                                    >
                                                                                        Star Ratings
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-sticky-elements.html"
                                                                                    >
                                                                                        Sticky Elements
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-tables.html"
                                                                                    >
                                                                                        Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-tabs.html"
                                                                                    >
                                                                                        Tabs
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-testimonials.html"
                                                                                    >
                                                                                        Testimonials
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-toggles.html"
                                                                                    >
                                                                                        Toggles
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-tooltips-popovers.html"
                                                                                    >
                                                                                        Tooltips &amp; Popovers
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-typography.html"
                                                                                    >
                                                                                        Typography
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-word-rotator.html"
                                                                                    >
                                                                                        Word Rotator
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="elements-360-image-viewer.html"
                                                                                    >
                                                                                        360º Image Viewer
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle active current-page-active"
                                                            href="#"
                                                        >
                                                            {" "}
                                                            Xaricdə təhsil <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Headers<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-overview.html"
                                                                        >
                                                                            Overview
                                                                        </a>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Classic
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-classic.html"
                                                                                >
                                                                                    Classic
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-classic-language-dropdown.html"
                                                                                >
                                                                                    Classic + Language Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-classic-big-logo.html"
                                                                                >
                                                                                    Classic + Big Logo
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Flat
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-flat.html"
                                                                                >
                                                                                    Flat
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-flat-top-bar.html"
                                                                                >
                                                                                    Flat + Top Bar
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-flat-top-bar-top-borders.html"
                                                                                >
                                                                                    Flat + Top Bar + Top Border
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-flat-colored-top-bar.html"
                                                                                >
                                                                                    Flat + Colored Top Bar
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-flat-borders.html"
                                                                                >
                                                                                    Flat + Borders
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Center
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-center.html"
                                                                                >
                                                                                    Center
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-center-double-navs.html"
                                                                                >
                                                                                    Center + Double Navs
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-center-nav-buttons.html"
                                                                                >
                                                                                    Center + Nav + Buttons
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-center-below-slider.html"
                                                                                >
                                                                                    Center Below Slider
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Floating
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-floating-bar.html"
                                                                                >
                                                                                    Floating Bar
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-floating-icons.html"
                                                                                >
                                                                                    Floating Icons
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-below-slider.html"
                                                                        >
                                                                            Below Slider
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-full-video.html"
                                                                        >
                                                                            Full Video
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-narrow.html"
                                                                        >
                                                                            Narrow
                                                                        </a>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Sticky
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-sticky-shrink.html"
                                                                                >
                                                                                    Sticky Shrink
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-sticky-scroll-up.html"
                                                                                >
                                                                                    Sticky Scroll Up
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-sticky-static.html"
                                                                                >
                                                                                    Sticky Static
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-sticky-change-logo.html"
                                                                                >
                                                                                    Sticky Change Logo
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-sticky-reveal.html"
                                                                                >
                                                                                    Sticky Reveal
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Transparent
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-transparent-light.html"
                                                                                >
                                                                                    Transparent Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-transparent-dark.html"
                                                                                >
                                                                                    Transparent Dark
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-transparent-light-bottom-border.html"
                                                                                >
                                                                                    Transparent Light + Bottom Border
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-transparent-dark-bottom-border.html"
                                                                                >
                                                                                    Transparent Dark + Bottom Border
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-transparent-bottom-slider.html"
                                                                                >
                                                                                    Transparent Bottom Slider
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-transparent-top-bar-extra-buttons.html"
                                                                                >
                                                                                    Transparent Top Bar Extra Buttons
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-semi-transparent-light.html"
                                                                                >
                                                                                    Semi Transparent Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-semi-transparent-dark.html"
                                                                                >
                                                                                    Semi Transparent Dark
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-semi-transparent-bottom-slider.html"
                                                                                >
                                                                                    Semi Transparent Bottom Slider
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-semi-transparent-top-bar-borders.html"
                                                                                >
                                                                                    Semi Transparent + Top Bar + Borders
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Full Width
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width.html"
                                                                                >
                                                                                    Full Width
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width-borders.html"
                                                                                >
                                                                                    Full Width + Borders
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width-transparent-light.html"
                                                                                >
                                                                                    Full Width Transparent Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width-transparent-dark.html"
                                                                                >
                                                                                    Full Width Transparent Dark
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width-semi-transparent-light.html"
                                                                                >
                                                                                    Full Width Semi Transparent Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width-semi-transparent-dark.html"
                                                                                >
                                                                                    Full Width Semi Transparent Dark
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-full-width-2-rows-extra-buttons.html"
                                                                                >
                                                                                    Full Width 2 Rows + Extra Buttons
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Navbar
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-navbar.html"
                                                                                >
                                                                                    Navbar
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-navbar-full.html"
                                                                                >
                                                                                    Navbar Full
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-navbar-pills.html"
                                                                                >
                                                                                    Navbar Pills
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-navbar-divisors.html"
                                                                                >
                                                                                    Navbar Divisors
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-navbar-icons-search.html"
                                                                                >
                                                                                    Nav Bar + Icons + Search
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Side Header
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Side Header Left
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-left-dropdown.html"
                                                                                        >
                                                                                            Dropdown
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-left-expand.html"
                                                                                        >
                                                                                            Expand
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-left-columns.html"
                                                                                        >
                                                                                            Columns
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-left-slide.html"
                                                                                        >
                                                                                            Slide
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-left-semi-transparent.html"
                                                                                        >
                                                                                            Semi Transparent
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-left-dark.html"
                                                                                        >
                                                                                            Dark
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Side Header Right
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-right-dropdown.html"
                                                                                        >
                                                                                            Dropdown
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-right-expand.html"
                                                                                        >
                                                                                            Expand
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-right-columns.html"
                                                                                        >
                                                                                            Columns
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-right-slide.html"
                                                                                        >
                                                                                            Slide
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-right-semi-transparent.html"
                                                                                        >
                                                                                            Semi Transparent
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-right-dark.html"
                                                                                        >
                                                                                            Dark
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Side Header Offcanvas
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-offcanvas-push.html"
                                                                                        >
                                                                                            Push
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-headers-side-header-offcanvas-slide.html"
                                                                                        >
                                                                                            Slide
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-side-header-narrow-bar.html"
                                                                                >
                                                                                    Side Header Narrow Bar
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-sign-in-sign-up.html"
                                                                        >
                                                                            Sign In / Sign Up
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-logged.html"
                                                                        >
                                                                            Logged
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-headers-mini-cart.html"
                                                                        >
                                                                            Mini Cart
                                                                        </a>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Search Styles
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-search-simple-input.html"
                                                                                >
                                                                                    Simple Input
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-search-simple-input-reveal.html"
                                                                                >
                                                                                    Simple Input Reveal
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-search-dropdown.html"
                                                                                >
                                                                                    Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-search-big-input-hidden.html"
                                                                                >
                                                                                    Big Input Hidden
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-search-full-screen.html"
                                                                                >
                                                                                    Full Screen
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Extra
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-extra-big-icon.html"
                                                                                >
                                                                                    Big Icon
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-extra-big-icons-top.html"
                                                                                >
                                                                                    Big Icons Top
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-extra-button.html"
                                                                                >
                                                                                    Button
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-headers-extra-background-color.html"
                                                                                >
                                                                                    Background Color
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Navigations
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Pills
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-pills.html"
                                                                                >
                                                                                    Pills
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-pills-arrows.html"
                                                                                >
                                                                                    Pills + Arrows
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-pills-dark-text.html"
                                                                                >
                                                                                    Pills Dark Text
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-pills-color-dropdown.html"
                                                                                >
                                                                                    Pills Color Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-pills-square.html"
                                                                                >
                                                                                    Pills Square
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-pills-rounded.html"
                                                                                >
                                                                                    Pills Rounded
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Stripes
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-stripe.html"
                                                                                >
                                                                                    Stripe
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-stripe-dark-text.html"
                                                                                >
                                                                                    Stripe Dark Text
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-stripe-color-dropdown.html"
                                                                                >
                                                                                    Stripe Color Dropdown
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Hover Effects
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-top-line.html"
                                                                                >
                                                                                    Top Line
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-top-line-animated.html"
                                                                                >
                                                                                    Top Line Animated
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-top-line-color-dropdown.html"
                                                                                >
                                                                                    Top Line Color Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-bottom-line.html"
                                                                                >
                                                                                    Bottom Line
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-bottom-line-animated.html"
                                                                                >
                                                                                    Bottom Line Animated
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-slide.html"
                                                                                >
                                                                                    Slide
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-sub-title.html"
                                                                                >
                                                                                    Sub Title
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hover-line-under-text.html"
                                                                                >
                                                                                    Line Under Text
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Vertical
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-vertical-dropdown.html"
                                                                                >
                                                                                    Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-vertical-expand.html"
                                                                                >
                                                                                    Expand
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-vertical-columns.html"
                                                                                >
                                                                                    Columns
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-vertical-slide.html"
                                                                                >
                                                                                    Slide
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Hamburguer
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hamburguer-sidebar.html"
                                                                                >
                                                                                    Sidebar
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-hamburguer-overlay.html"
                                                                                >
                                                                                    Overlay
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Dropdown Styles
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-dark.html"
                                                                                >
                                                                                    Dark
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-light.html"
                                                                                >
                                                                                    Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-colors.html"
                                                                                >
                                                                                    Colors
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-top-line.html"
                                                                                >
                                                                                    Top Line
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-square.html"
                                                                                >
                                                                                    Square
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-arrow.html"
                                                                                >
                                                                                    Arrow Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-arrow-center.html"
                                                                                >
                                                                                    Arrow Center Dropdown
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-modern-light.html"
                                                                                >
                                                                                    Modern Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-modern-dark.html"
                                                                                >
                                                                                    Modern Dark
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Dropdown Effects
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-effect-no-effect.html"
                                                                                >
                                                                                    No Effect
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-effect-opacity.html"
                                                                                >
                                                                                    Opacity
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-effect-move-to-top.html"
                                                                                >
                                                                                    Move To Top
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-effect-move-to-bottom.html"
                                                                                >
                                                                                    Move To Bottom
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-effect-move-to-right.html"
                                                                                >
                                                                                    Move To Right
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-dropdowns-effect-move-to-left.html"
                                                                                >
                                                                                    Move To Left
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Font Styles
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-font-small.html"
                                                                                >
                                                                                    Small
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-font-medium.html"
                                                                                >
                                                                                    Medium
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-font-large.html"
                                                                                >
                                                                                    Large
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-font-alternative.html"
                                                                                >
                                                                                    Alternative
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Icons
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-icons.html"
                                                                                >
                                                                                    Icons
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-navigations-icons-float-icons.html"
                                                                                >
                                                                                    Float Icons
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-navigations-sub-title.html"
                                                                        >
                                                                            Sub Title
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-navigations-divisors.html"
                                                                        >
                                                                            Divisors
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-navigations-logo-between.html"
                                                                        >
                                                                            Logo Between
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-navigations-one-page.html"
                                                                        >
                                                                            One Page Nav
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-navigations-click-to-open.html"
                                                                        >
                                                                            Click To Open
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Page Headers
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-page-headers-overview.html"
                                                                        >
                                                                            Overview
                                                                        </a>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Classic
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-classic-small.html"
                                                                                >
                                                                                    Small
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-classic-medium.html"
                                                                                >
                                                                                    Medium
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-classic-large.html"
                                                                                >
                                                                                    Large
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Modern
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-modern-small.html"
                                                                                >
                                                                                    Small
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-modern-medium.html"
                                                                                >
                                                                                    Medium
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-modern-large.html"
                                                                                >
                                                                                    Large
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Colors
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-colors-primary.html"
                                                                                >
                                                                                    Primary
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-colors-secondary.html"
                                                                                >
                                                                                    Secondary
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-colors-tertiary.html"
                                                                                >
                                                                                    Tertiary
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-colors-quaternary.html"
                                                                                >
                                                                                    Quaternary
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-colors-light.html"
                                                                                >
                                                                                    Light
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-colors-dark.html"
                                                                                >
                                                                                    Dark
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Title Position
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Left
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-left-small.html"
                                                                                        >
                                                                                            Small
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-left-medium.html"
                                                                                        >
                                                                                            Medium
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-left-large.html"
                                                                                        >
                                                                                            Large
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Right
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-right-small.html"
                                                                                        >
                                                                                            Small
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-right-medium.html"
                                                                                        >
                                                                                            Medium
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-right-large.html"
                                                                                        >
                                                                                            Large
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Center
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-center-small.html"
                                                                                        >
                                                                                            Small
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-center-medium.html"
                                                                                        >
                                                                                            Medium
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-title-position-center-large.html"
                                                                                        >
                                                                                            Large
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Background
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-fixed.html"
                                                                                >
                                                                                    Fixed
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-parallax.html"
                                                                                >
                                                                                    Parallax
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-video.html"
                                                                                >
                                                                                    Video
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-transparent-header.html"
                                                                                >
                                                                                    Transparent Header
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-pattern.html"
                                                                                >
                                                                                    Pattern
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-overlay.html"
                                                                                >
                                                                                    Overlay
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-background-clean.html"
                                                                                >
                                                                                    Clean (No Background)
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Extra
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Breadcrumb
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-extra-breadcrumb-outside.html"
                                                                                        >
                                                                                            Outside
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-page-headers-extra-breadcrumb-dark.html"
                                                                                        >
                                                                                            Dark
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-extra-scroll-to-content.html"
                                                                                >
                                                                                    Scroll to Content
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-extra-full-width.html"
                                                                                >
                                                                                    Full Width
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-extra-product.html"
                                                                                >
                                                                                    Product
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-page-headers-extra-mouse-hover-split.html"
                                                                                >
                                                                                    Mouse Hover Split
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Footers<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-footers-overview.html"
                                                                        >
                                                                            Overview
                                                                        </a>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Classic
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-classic.html#footer"
                                                                                >
                                                                                    Classic
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-classic-advanced.html#footer"
                                                                                >
                                                                                    Advanced
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-classic-compact.html#footer"
                                                                                >
                                                                                    Compact
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-classic-simple.html#footer"
                                                                                >
                                                                                    Simple
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-classic-locations.html#footer"
                                                                                >
                                                                                    Locations
                                                                                </a>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Copyright
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-copyright-light.html#footer"
                                                                                        >
                                                                                            Light
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-copyright-dark.html#footer"
                                                                                        >
                                                                                            Dark
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-copyright-social-icons.html#footer"
                                                                                        >
                                                                                            Social Icons
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Colors
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-colors-primary.html#footer"
                                                                                        >
                                                                                            Primary
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-colors-secondary.html#footer"
                                                                                        >
                                                                                            Secondary
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-colors-tertiary.html#footer"
                                                                                        >
                                                                                            Tertiary
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-colors-quaternary.html#footer			"
                                                                                        >
                                                                                            Quaternary
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-colors-light.html#footer"
                                                                                        >
                                                                                            Light
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-classic-colors-light-simple.html#footer"
                                                                                        >
                                                                                            Light Simple
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Modern
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-modern.html#footer"
                                                                                >
                                                                                    Modern
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-modern-font-style-alternative.html#footer"
                                                                                >
                                                                                    Font Style Alternative
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-modern-clean.html#footer"
                                                                                >
                                                                                    Clean
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-modern-useful-links.html#footer"
                                                                                >
                                                                                    Useful Links
                                                                                </a>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Background
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-modern-background-image-simple.html#footer"
                                                                                        >
                                                                                            Image Simple
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-modern-background-image-advanced.html#footer"
                                                                                        >
                                                                                            Image Advanced
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-modern-background-video-simple.html#footer"
                                                                                        >
                                                                                            Video Simple
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Call to Action
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-modern-call-to-action-button.html#footer"
                                                                                        >
                                                                                            Button
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-modern-call-to-action-simple.html#footer"
                                                                                        >
                                                                                            Simple
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Blog
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-blog-classic.html#footer"
                                                                                >
                                                                                    Blog Classic
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            eCommerce
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-ecommerce-classic.html#footer"
                                                                                >
                                                                                    eCommerce Classic
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Contact Form
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-contact-form-classic.html#footer"
                                                                                >
                                                                                    Classic
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-contact-form-above-the-map.html#footer"
                                                                                >
                                                                                    Above the Map
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-contact-form-center.html#footer"
                                                                                >
                                                                                    Center
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-contact-form-columns.html#footer"
                                                                                >
                                                                                    Columns
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Map<i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-map-hidden.html#footer"
                                                                                >
                                                                                    Hidden Map
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-map-full-width.html#footer"
                                                                                >
                                                                                    Full Width
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown-submenu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Extra
                                                                            <i className="fas fa-chevron-down"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Simple
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-extra-top-social-icons.html#footer"
                                                                                        >
                                                                                            Top Social Icons
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-extra-big-icons.html#footer"
                                                                                        >
                                                                                            Big Icons
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-extra-recent-work.html#footer"
                                                                                >
                                                                                    Recent Work
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-extra-reveal.html#footeranchor"
                                                                                >
                                                                                    Reveal
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="feature-footers-extra-instagram.html#footer"
                                                                                >
                                                                                    Instagram
                                                                                </a>
                                                                            </li>
                                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Full Width
                                                                                    <i className="fas fa-chevron-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-extra-full-width-light.html#footer"
                                                                                        >
                                                                                            Simple Light
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="dropdown-item"
                                                                                            href="feature-footers-extra-full-width-dark.html#footer"
                                                                                        >
                                                                                            Simple Dark
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Admin Extension{" "}
                                                                    <span className="tip tip-dark">hot</span>
                                                                    <em className="not-included">
                                                                        (Not Included)
                                                                    </em>
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-forms-basic.html"
                                                                        >
                                                                            Forms Basic
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-forms-advanced.html"
                                                                        >
                                                                            Forms Advanced
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-forms-wizard.html"
                                                                        >
                                                                            Forms Wizard
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-forms-code-editor.html"
                                                                        >
                                                                            Code Editor
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-tables-advanced.html"
                                                                        >
                                                                            Tables Advanced
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-tables-responsive.html"
                                                                        >
                                                                            Tables Responsive
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-tables-editable.html"
                                                                        >
                                                                            Tables Editable
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-tables-ajax.html"
                                                                        >
                                                                            Tables Ajax
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-admin-charts.html"
                                                                        >
                                                                            Charts
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Sliders<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-slider-revolution.html"
                                                                        >
                                                                            Revolution Slider
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="index-slider-owl.html"
                                                                        >
                                                                            Owl Slider
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Layout Options
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-layout-boxed.html"
                                                                        >
                                                                            Boxed
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-layout-dark.html"
                                                                        >
                                                                            Dark
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-layout-rtl.html"
                                                                        >
                                                                            RTL
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Extra<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-cursor-effect.html"
                                                                        >
                                                                            Cursor Effect
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-grid-system.html"
                                                                        >
                                                                            Grid System
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-reading-progress.html"
                                                                        >
                                                                            Reading Progress
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-lazy-load.html"
                                                                        >
                                                                            Lazy Load
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-page-loading.html"
                                                                        >
                                                                            Page Loading
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-page-transition.html"
                                                                        >
                                                                            Page Transition
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="feature-side-panel.html"
                                                                        >
                                                                            Side Panel
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="feature-gdpr.html"
                                                                >
                                                                    GDPR
                                                                </a>{" "}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            {" "}
                                                            Elmi fəaliyyət <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Contact Us
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="contact-us-advanced.html"
                                                                        >
                                                                            Contact Us - Advanced
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="contact-us.html"
                                                                        >
                                                                            Contact Us - Basic
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="contact-us-recaptcha.html"
                                                                        >
                                                                            Contact Us - Recaptcha
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    About Us
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="about-us-advanced.html"
                                                                        >
                                                                            About Us - Advanced
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="about-us.html"
                                                                        >
                                                                            About Us - Basic
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="about-me.html"
                                                                        >
                                                                            About Me
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Layouts<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-left-sidebar.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-right-sidebar.html"
                                                                        >
                                                                            Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-left-and-right-sidebars.html"
                                                                        >
                                                                            Left and Right Sidebars
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-sticky-sidebar.html"
                                                                        >
                                                                            Sticky Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-secondary-navbar.html"
                                                                        >
                                                                            Secondary Navbar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Extra<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-404.html"
                                                                        >
                                                                            404 Error
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-500.html"
                                                                        >
                                                                            500 Error
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-coming-soon.html"
                                                                        >
                                                                            Coming Soon
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-maintenance-mode.html"
                                                                        >
                                                                            Maintenance Mode
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-search-results.html"
                                                                        >
                                                                            Search Results
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="sitemap.html"
                                                                        >
                                                                            Sitemap
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Team<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-team-advanced.html"
                                                                        >
                                                                            Team - Advanced
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-team.html"
                                                                        >
                                                                            Team - Basic
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Services
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-services.html"
                                                                        >
                                                                            Services - Version 1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-services-2.html"
                                                                        >
                                                                            Services - Version 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="page-services-3.html"
                                                                        >
                                                                            Services - Version 3
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="page-careers.html"
                                                                >
                                                                    Careers
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="page-faq.html"
                                                                >
                                                                    FAQ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="page-login.html"
                                                                >
                                                                    Login / Register
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="page-user-profile.html"
                                                                >
                                                                    User Profile
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            {" "}
                                                            Kitabxana <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Single Project
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-wide-slider.html"
                                                                        >
                                                                            Wide Slider
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-small-slider.html"
                                                                        >
                                                                            Small Slider
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-full-width-slider.html"
                                                                        >
                                                                            Full Width Slider
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-gallery.html"
                                                                        >
                                                                            Gallery
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-carousel.html"
                                                                        >
                                                                            Carousel
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-medias.html"
                                                                        >
                                                                            Medias
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-full-width-video.html"
                                                                        >
                                                                            Full Width Video
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-masonry-images.html"
                                                                        >
                                                                            Masonry Images
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-left-sidebar.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-right-sidebar.html"
                                                                        >
                                                                            Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-left-and-right-sidebars.html"
                                                                        >
                                                                            Left and Right Sidebars
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-sticky-sidebar.html"
                                                                        >
                                                                            Sticky Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-single-extended.html"
                                                                        >
                                                                            Extended
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Grid Layouts
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-1-column.html"
                                                                        >
                                                                            1 Column
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-2-columns.html"
                                                                        >
                                                                            2 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-3-columns.html"
                                                                        >
                                                                            3 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-4-columns.html"
                                                                        >
                                                                            4 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-5-columns.html"
                                                                        >
                                                                            5 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-6-columns.html"
                                                                        >
                                                                            6 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-no-margins.html"
                                                                        >
                                                                            No Margins
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-full-width-no-margins.html"
                                                                        >
                                                                            Full Width No Margins
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-grid-1-column-title-and-description.html"
                                                                        >
                                                                            Title and Description
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Masonry Layouts
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-2-columns.html"
                                                                        >
                                                                            2 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-3-columns.html"
                                                                        >
                                                                            3 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-4-columns.html"
                                                                        >
                                                                            4 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-5-columns.html"
                                                                        >
                                                                            5 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-6-columns.html"
                                                                        >
                                                                            6 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-no-margins.html"
                                                                        >
                                                                            No Margins
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-masonry-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Sidebar Layouts
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebars
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-sidebar-sticky.html"
                                                                        >
                                                                            Sticky Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Ajax<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-ajax-page.html"
                                                                        >
                                                                            Ajax on Page
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-ajax-modal.html"
                                                                        >
                                                                            Ajax on Modal
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Extra<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-timeline.html"
                                                                        >
                                                                            Timeline
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-lightbox.html"
                                                                        >
                                                                            Lightbox
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-load-more.html"
                                                                        >
                                                                            Load More
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-infinite-scroll.html"
                                                                        >
                                                                            Infinite Scroll
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-lazy-load-masonry.html"
                                                                        >
                                                                            Lazy Load Masonry
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-pagination.html"
                                                                        >
                                                                            Pagination
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="portfolio-extra-combination-filters.html"
                                                                        >
                                                                            Combination Filters
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            {" "}
                                                            Layihələr <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Large Image
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-large-image-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-large-image-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-large-image-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-large-image-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Medium Image
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-medium-image-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-medium-image-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Grid<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-4-columns.html"
                                                                        >
                                                                            4 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-3-columns.html"
                                                                        >
                                                                            3 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-no-margins.html"
                                                                        >
                                                                            No Margins
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-no-margins-full-width.html"
                                                                        >
                                                                            No Margins Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-grid-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Masonry<i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-4-columns.html"
                                                                        >
                                                                            4 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-3-columns.html"
                                                                        >
                                                                            3 Columns
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-no-margins.html"
                                                                        >
                                                                            No Margins
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-no-margins-full-width.html"
                                                                        >
                                                                            No Margins Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-masonry-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Timeline
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-timeline.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-timeline-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-timeline-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Single Post
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-slider-gallery.html"
                                                                        >
                                                                            Slider Gallery
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-image-gallery.html"
                                                                        >
                                                                            Image Gallery
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-embedded-video.html"
                                                                        >
                                                                            Embedded Video
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-html5-video.html"
                                                                        >
                                                                            HTML5 Video
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-blockquote.html"
                                                                        >
                                                                            Blockquote
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-link.html"
                                                                        >
                                                                            Link
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-embedded-audio.html"
                                                                        >
                                                                            Embedded Audio
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-small-image.html"
                                                                        >
                                                                            Small Image
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu">
                                                                <a className="dropdown-item" href="#">
                                                                    Post Comments
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post.html#comments"
                                                                        >
                                                                            Default
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-comments-facebook.html#comments"
                                                                        >
                                                                            Facebook Comments
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="blog-post-comments-disqus.html#comments"
                                                                        >
                                                                            Disqus Comments
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            {" "}
                                                            Xəbərlər <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    Single Product
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-4-columns.html"
                                                                >
                                                                    4 Columns
                                                                </a>
                                                            </li>
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    3 Columns
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-3-columns-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-3-columns-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-3-columns-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    2 Columns
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    1 Column
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-cart.html"
                                                                >
                                                                    Cart
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-login.html"
                                                                >
                                                                    Login
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-checkout.html"
                                                                >
                                                                    Checkout
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-order-complete.html"
                                                                >
                                                                    Order Complete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            {" "}
                                                            Elanlar <i className="fas fa-chevron-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    Single Product
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-product-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-4-columns.html"
                                                                >
                                                                    4 Columns
                                                                </a>
                                                            </li>
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    3 Columns
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-3-columns-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-3-columns-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-3-columns-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    2 Columns
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-2-columns-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu dropdown-reverse">
                                                                <a className="dropdown-item" href="#">
                                                                    1 Column
                                                                    <i className="fas fa-chevron-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-full-width.html"
                                                                        >
                                                                            Full Width
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-sidebar-left.html"
                                                                        >
                                                                            Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-sidebar-right.html"
                                                                        >
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="shop-1-column-sidebar-left-and-right.html"
                                                                        >
                                                                            Left and Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-cart.html"
                                                                >
                                                                    Cart
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-login.html"
                                                                >
                                                                    Login
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-checkout.html"
                                                                >
                                                                    Checkout
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="shop-order-complete.html"
                                                                >
                                                                    Order Complete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <ul className="header-social-icons social-icons d-none d-sm-block">
                                            <li className="social-icons-facebook">
                                                <a
                                                    href="http://www.facebook.com/"
                                                    target="_blank"
                                                    title="Facebook"
                                                >
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="social-icons-twitter">
                                                <a
                                                    href="http://www.twitter.com/"
                                                    target="_blank"
                                                    title="Twitter"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="social-icons-linkedin">
                                                <a
                                                    href="http://www.linkedin.com/"
                                                    target="_blank"
                                                    title="Linkedin"
                                                >
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <button
                                            className="btn header-btn-collapse-nav"
                                            data-bs-toggle="collapse"
                                            data-bs-target=".header-nav-main nav"
                                        >
                                            <i className="fas fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
};

export default HeaderWraper;
