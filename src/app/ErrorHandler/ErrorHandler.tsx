import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

export class ErrorHandler extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo);
    }

    render(): ReactNode {
        const {hasError} = this.state;
        const {children} = this.props;

        if(hasError) {
            return <div>ERROR</div>
        }

        return children;
    }
}