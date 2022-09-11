
import { useState } from 'react';
import { AppShell, useMantineTheme,} from '@mantine/core';

import Head from './head';
import Foot from './foot';
import Side from './side';
import Nav from './nav';

import Main from '../components/Main';

export default function App_Shell() {
   const theme = useMantineTheme();
   const [opened, setOpened] = useState(false);
   return (

      <AppShell
         styles={{
            main: {
               background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
         }}
         navbarOffsetBreakpoint="sm"
         asideOffsetBreakpoint="sm"
         navbar={<Nav opened={opened} />}
         aside={<Side />}
         footer={<Foot />}
         header={<Head opened={opened} setOpened={setOpened} />}
      >
         <Main/>
      </AppShell>
   );
}