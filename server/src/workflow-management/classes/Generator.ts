import { Action, ActionType, Coordinates, TagName } from "../../types";
import { WhereWhatPair, WorkflowFile } from '@wbr-project/wbr-interpret';
import logger from "../../logger";
import { Socket } from "socket.io";
import { Page } from "playwright";
import {
  getElementInformation,
  getRect,
  getSelectors,
  isRuleOvershadowing,
  selectorAlreadyInWorkflow
} from "../selector";
import { CustomActions } from "../../../../src/shared/types";
import { workflow } from "../../routes";
import { saveFile } from "../storage";
import fs from "fs";
import { getBestSelectorForAction } from "../utils";
import { browserPool } from "../../server";


interface MetaData {
  name: string;
  create_date: string;
  pairs: number;
  update_date: string;
  params: string[],
}


