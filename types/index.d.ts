/**
 * Copyright 2020 Bruno P. Kinoshita
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { VueConstructor } from 'vue'
import { Message } from '@lumino/messaging/types'
import { Widget } from "@lumino/widgets";

declare module "tupilabs/vue-lumino" {
  const Lumino : VueConstructor

  interface LuminoWidget extends Widget {
    $id: string;
    $name: string;
    closable: boolean;

    constructor(id: string, name: string, closable: boolean);
    createNode(id: string): HTMLElement;
    _getEventDetails();
  }

  export default Lumino;
  export {
    Lumino,
    LuminoWidget
  }
}