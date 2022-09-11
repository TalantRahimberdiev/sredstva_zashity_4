
import {Header,Text,MediaQuery,Burger,useMantineTheme} from '@mantine/core';
import Dark_Light from './helpers/dark_light';

export default function Head({opened,setOpened}) {
   const theme = useMantineTheme();
   return (
      <Header height={70} p="md">
         <div style={{ display: 'flex', alignItems: 'center', height: '100%',justifyContent:'space-around' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
               <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
               />
            </MediaQuery>

            <Text>Методы и средства защиты информации</Text>
            <Text>Практическая работа №4</Text>
            <Dark_Light/>
         </div>
      </Header>
   )
}