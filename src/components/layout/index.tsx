import { Layout } from 'antd'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const { Header, Footer, Content } = Layout
interface MainLayoutProps {
	title: string
	children: ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
	return (
		<Layout>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header>
				<AppHeader />
			</Header>
			<Content>{children}</Content>
			<Footer>
				<AppFooter />
			</Footer>
		</Layout>
	)
}

export default MainLayout

