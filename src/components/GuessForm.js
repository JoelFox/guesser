import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
} from "antd";
import { createGuess } from "../api";
import { toast } from "react-toastify";
import { InfoBox } from ".";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const Demo = ({ guesses, setGuesses }) => {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const onGenderChange = (value) => {
    console.log(value);
  };

  const onFinish = (values) => {
    values.date = values.date.format("YYYY-MM-DD");
    // values.date = values.date.toString();

    console.log(values);
    createGuess(values).then((res) => {
      // const newGuessesArray = guesses.concat([res]);
      // setGuesses(newGuessesArray);
      toast.success("Din gissning har sparats!");
      navigate("/thanks", { state: values.guesserName });
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <InfoBox />
      <Form
        {...layout}
        form={form}
        name="guess-form"
        onFinish={onFinish}
        className="FullWidth"
      >
        <Form.Item
          name="guesserName"
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
          label="Flicka eller pojke?"
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
          label="Längd (cm)"
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
          label="Vikt (g)"
          rules={[
            {
              required: true,
              message: "Du måste välja en vikt",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="date"
          label="Datum"
          rules={[{ required: true, message: "Du måste välja ett datum!" }]}
        >
          <DatePicker placeholder="Välj ett datum" />
        </Form.Item>
        <Form.Item
          name="time"
          label="Klockslag (HH:MM)"
          rules={[
            {
              required: true,
              message: "Du måste välja ett klockslag!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="welcomeMessage"
          label="Välkomsthälsning/livsråd till knodden"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nameSuggestions"
          label="Namnförslag"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="otherGuess"
          label="Övrig gissning"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Skicka in
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Nollställ
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Demo;
