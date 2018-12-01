﻿import {Home} from "@app/_models/home";
import {Menu} from "@app/_models/menu";
import {Organization} from "@app/_models/organization";

export interface LarpemModel {
  home: Home;
  menu: Menu;
  organization: Organization;
}