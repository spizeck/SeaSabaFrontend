// pages/index.tsx
import { Card, CardProps } from '../components/Card';  // adjust the path accordingly

export default function Home() {

    const cardProps: CardProps = {
        title: "Test Title",
        description: "Test Description"
    }

    return (
        <div>
            <Card {...cardProps} />
        </div>
    )
}