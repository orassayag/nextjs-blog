import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Alert type="error">
                Test
            </Alert>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
};

export default FirstPost;