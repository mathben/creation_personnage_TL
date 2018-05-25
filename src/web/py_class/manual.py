#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os


class Manual(object):
    """Contain all gaming rule."""

    def __init__(self, parser):
        # self._str_manual = ""
        self._manual = {}
        self._manual_path = parser.db_manual_path
        if os.path.isfile(self._manual_path):
            with open(self._manual_path, encoding='utf-8') as manual_file:
                self._manual = json.load(manual_file)
        else:
            self._manual = {"manual": [], "lore": [], "char_rule": {}}

    def update(self, dct_manual, save=False):
        # Transform the object in json string
        self._manual.update(dct_manual)
        # self._str_manual = json.dumps(self._manual)

        # Save on file
        if save:
            with open(self._manual_path, mode="w", encoding='utf-8') as manual_file:
                json.dump(self._manual, manual_file, indent=2)

    def get_all(self, is_admin=False):
        if not self._manual:
            return {}

        tmp_rule = {"char_rule": {}, "manual": self._manual["manual"], "lore": self._manual["lore"]}
        if is_admin:
            tmp_rule["char_rule"]["schema_user"] = self._manual["char_rule"]["schema_user"]
            tmp_rule["char_rule"]["schema_char"] = self._manual["char_rule"]["schema_char"]
            tmp_rule["char_rule"]["form_user"] = self._manual["char_rule"]["admin_form_user"]
            tmp_rule["char_rule"]["form_char"] = self._manual["char_rule"]["admin_form_char"]
        else:
            tmp_rule["char_rule"]["schema_user"] = self._manual["char_rule"]["schema_user"]
            tmp_rule["char_rule"]["schema_char"] = self._manual["char_rule"]["schema_char"]
            tmp_rule["char_rule"]["form_user"] = self._manual["char_rule"]["form_user"]
            tmp_rule["char_rule"]["form_char"] = self._manual["char_rule"]["form_char"]
        return tmp_rule

    def get_str_all(self, is_admin=False):
        obj = self.get_all(is_admin=is_admin)
        return json.dumps(obj)

    def get_last_date_updated(self):
        f = os.path.getmtime(self._manual_path)
        return f
