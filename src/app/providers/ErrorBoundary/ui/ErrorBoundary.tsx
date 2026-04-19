import React, { Suspense, type ErrorInfo } from "react";
// import type {ErrorInfo}
// import { PageError } from 'widgets/PageError/ui/PageError';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    /* После апдейта состояния через getDerivedStateFromError
         -> вызывается ререндер
         -> показываем fallback UI (компонент ошибки)
         */
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("error =>", error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Suspense fallback="">Что-то пошло не так :(</Suspense>;
    }

    return children;
  }
}
