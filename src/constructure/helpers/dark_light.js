
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export default function Dark_Light() {
   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
   const dark = colorScheme === 'dark';

   return (
      <ActionIcon
         variant="outline"
         color={dark ? 'yellow' : 'blue'}
         onClick={() => toggleColorScheme()}
      >
         {dark ? 'D': 'L'}
      </ActionIcon>
   );
}