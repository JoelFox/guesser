import { Form, Input, Button, Select } from "antd";
import { createGuess } from "../api";
import { toast } from "react-toastify";
import React from "react";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = ({ guesses, setGuesses }) => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;
      default:
        return;
    }
  };

  const onFinish = (values) => {
    console.log(values);
    createGuess(values.guess).then((res) => {
      const newGuessesArray = guesses.concat([res]);
      setGuesses(newGuessesArray);
      toast.success("Added Successfully");
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  //   const onFill = () => {
  //     form.setFieldsValue({
  //       note: "Hello world!",
  //       gender: "male",
  //     });
  //   };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Kön"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Kön" onChange={onGenderChange} allowClear>
          <Option value="female">Kvinna</Option>
          <Option value="male">Man</Option>
        </Select>
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      ></Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Skicka in
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Nollställ
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;

// ReactDOM.render(<Demo />, mountNode);
