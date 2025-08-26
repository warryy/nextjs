import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface TestInputRef {
  getValue: () => string;
  setValue: (value: string) => void;
  focus: () => void;
}

interface TestInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const TestInput = forwardRef<TestInputRef, TestInputProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    placeholder,
    className = "border-2 border-gray-300 rounded-md p-2",
  } = props;

  // 内部状态，用于非受控模式
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  // 判断是否为受控组件
  const isControlled = value !== undefined;

  // 当前显示的值
  const displayValue = isControlled ? value : internalValue;

  // 处理值变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  // 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    getValue: () => displayValue,
    setValue: (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
    },
    focus: () => {
      const input = document.querySelector("input") as HTMLInputElement;
      input?.focus();
    },
  }));

  // 当 defaultValue 变化时更新内部状态
  useEffect(() => {
    if (!isControlled && defaultValue !== undefined) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  return (
    <input
      type="text"
      className={className}
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
});

TestInput.displayName = "TestInput";

export default TestInput;
