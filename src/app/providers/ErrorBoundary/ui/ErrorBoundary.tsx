import { ErrorPage } from "@/shared/ui/ErrorPage";
import { Button } from "@mantine/core";
import React, { type ErrorInfo } from "react";
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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary: ", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorPage onReload={this.handleReload} onReset={this.handleReset} />
      );
    }

    return children;
  }
}
