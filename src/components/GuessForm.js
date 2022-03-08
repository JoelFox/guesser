import React from 'react'
import { Form, Button, Input } from 'antd';
import { createGuess } from '../api'
import { toast } from 'react-toastify';

const GuessForm = ({ form, guesses, setGuesses }) => {

  const onFinish = (values) => {
    createGuess(values.guess).then(res => {
      const newGuessesArray = guesses.concat([res])
      setGuesses(newGuessesArray)
      toast.success('Added Successfully')
    })
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Form
      name="guess_form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Kön" name="gender" rules={([{ required: true, message: "Du måste välja ett kön!"}])}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Skicka in
        </Button>
      </Form.Item>
    </Form>
  )
}


export default GuessForm;