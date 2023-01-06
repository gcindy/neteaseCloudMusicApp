/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-06 10:51:53
 * @LastEditTime: 2023-01-06 11:25:34
 */

import * as React from "react";
import { SvgToXml } from "../components/svgComponents";

import { MineIcon, HomeIcon, PodcastIcon, Search } from "../assets/svg";

export interface SvgStyleProps {
  type: string | "mine_icon" | "home_icon" | "podcast_icon" | "search";
}

export const Icon: React.FC<SvgStyleProps> = props => {
  // 这里对类型映射
  const arrowType: any = {
    mine_icon: MineIcon,
    home_icon: HomeIcon,
    podcast_icon: PodcastIcon,
    search: Search,
  };

  // console.log("props==>type", props.type);

  const ArrowXmlStr = arrowType[props.type] as unknown as string;

  return <SvgToXml xml={ArrowXmlStr} {...props} />;
};
