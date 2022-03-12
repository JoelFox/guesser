import { Form, Input, InputNumber, Button, Select, DatePicker, TimePicker } from "antd";
import { createGuess } from "../api";
import { toast } from "react-toastify";
import moment from "moment";


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
    console.log(value);
  };

  const onFinish = (values) => {
    values.date = values.date.toString();
    console.log(values);
    createGuess(values).then((res) => {
      const newGuessesArray = guesses.concat([res]);
      setGuesses(newGuessesArray);
      toast.success("Din gissning har sparats!");
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="guess-form" onFinish={onFinish} className="FullWidth">
      <Form.Item
        name="guessName"
        label="Ditt för- och efternamn"
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
            message: "Du måste välja ett kön",
          },
        ]}
      >
        <Select
          placeholder="Vad blir det?"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="pojke">Pojke</Option>
          <Option value="flicka">Flicka</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="height"
        label="Längd"
        rules={[
          {
            required: true,
            message: "Du måste välja en längd",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="weight"
        label="Vikt"
        rules={[
          {
            required: true,
            message: "Du måste välja en vikt",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name="date" label="Datum" rules={[{required: true, message: "Du måste välja ett datum!"}]}>
        <DatePicker placeholder="Välj ett datum"/>
      </Form.Item>
      <Form.Item name="time" label="Klockslag" rules={[{required: true, message: "Du måste välja ett klockslag!"}]}>
        <TimePicker placeholder="Välj ett klockslag" format={"HH:mm"}/>
      </Form.Item>

      <Form.Item
        name="welcomeMessage"
        label="Välkomsthälsning/livsråd till knodden"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
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
