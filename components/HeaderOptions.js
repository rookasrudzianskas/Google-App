import React from 'react';
import {
    DotsVerticalIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from "@heroicons/react/outline";
import { MapIcon } from "@heroicons/react/solid";
import HeaderOption from "./HeaderOption";

const HeaderOptions = () => {
    return (
        <div>

            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>



        <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
            </div>

        </div>
    );
};

export default HeaderOptions;
