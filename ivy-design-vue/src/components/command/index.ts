import { type App } from 'vue'

import Command from './src/index.vue'
import CommandItem from './src/item.vue'
import CommandGroup from './src/group.vue'
import CommandSeparator from './src/separator.vue'
import CommandDialog from './src/dialog.vue'
import CommandList from './src/list.vue'
import CommandSearch from './src/search.vue'

export {
  Command,
  CommandItem,
  CommandGroup,
  CommandSeparator,
  CommandDialog,
  CommandList,
  CommandSearch
}

export default (app: App) => {
  app.component(Command.name, Command)
  app.component(CommandItem.name, CommandItem)
  app.component(CommandGroup.name, CommandGroup)
  app.component(CommandSeparator.name, CommandSeparator)
  app.component(CommandDialog.name, CommandDialog)
  app.component(CommandList.name, CommandList)
  app.component(CommandSearch.name, CommandSearch)
}
