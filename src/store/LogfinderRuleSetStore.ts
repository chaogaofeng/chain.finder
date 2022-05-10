import { atom } from "recoil";
import {
  LogFindersActionRuleSet,
  LogFindersAmountRuleSet
} from "@gnchain/chain.js/dist/log-finder-ruleset";

export const LogfinderActionRuleSet = atom<LogFindersActionRuleSet[]>({
  key: "LogfinderActionRuleSetState",
  default: []
});

export const LogfinderAmountRuleSet = atom<LogFindersAmountRuleSet[]>({
  key: "LogfinderAmountRuleSetState",
  default: []
});
