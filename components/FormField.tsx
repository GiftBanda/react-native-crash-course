import { View, Text } from 'react-native'
import React, {FC} from 'react'

interface FormFieldProps {
    title: string,
    value: any,
    handleChangeText: (e:any) => void,
    otherStyles?: string
}

const FormField:FC<FormFieldProps> = ({ title, value, handleChangeText, otherStyles }) => {
  return (
    <View>
      <Text className='text-base text-gray-100'>FormField</Text>
    </View>
  )
}

export default FormField