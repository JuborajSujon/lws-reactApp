import Counter from "../RenderProps/Counter";
import HoverCounter from "../RenderProps/HoverCounter";
import ThemeContext from "./ReactThemeContext";

const Content = () => {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme, switchTheme }) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
};

export default Content;
