"use strict";
// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvents(events, _section, _method) {
    return events.filter(function (_a) {
        var _b = _a.event, method = _b.method, section = _b.section;
        return section === _section && method === _method;
    });
}
exports.filterEvents = filterEvents;
