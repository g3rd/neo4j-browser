/*
 * Copyright (c) 2002-2018 "Neo4j, Inc"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { version } from 'project-root/package.json'
import { getBackgroundTxMetadata, getUserTxMetadata } from './txMetadata'

test('getBackgroundTxMetadata has the expected format', () => {
  const res = getBackgroundTxMetadata({ hasServerSupport: true })
  expect(res.txMetadata).toEqual({
    type: 'system',
    app: `neo4j-browser_v${version}`
  })
})

test('getUserTxMetadata has the expected format', () => {
  const res = getUserTxMetadata({ hasServerSupport: true })
  expect(res.txMetadata).toEqual({
    type: 'user-direct',
    app: `neo4j-browser_v${version}`
  })
})
