import { FlatList, View } from 'react-native'
import Logo from '../assets/icons/logo.svg'
import { styles } from '../styles/home.styles'
import { InputAdd } from '../components/InputAdd'
import { NoItems } from '../components/NoItems'
import { Category } from 'components/Category'
import { useEffect } from 'react'
import { dataSource } from 'database'

export default function Home() {

  useEffect(() => {
    const connectToDB = async () => {
      if (!dataSource.isInitialized) {
        await dataSource.initialize()
      }
    }

    connectToDB()
  }, [])

  return(
    <View style={styles.body}>
      <Logo />
      <InputAdd />

      <FlatList 
        data={[1,2,3,4]}
        style={{width: '100%', marginTop: 45}}
        contentContainerStyle={{gap: 10, alignItems: 'center'}}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Category title='Compras do mercado'/>}
        ListEmptyComponent={() => <NoItems text='Não há listas cadastradas'/>}
      
      />
    </View>
    
  )

}
