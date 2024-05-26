import Layout from '@/components/layout';
import { Separator } from '@/components/ui/separator';

export default function Work() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Experience</h1>
      <Separator />
      <section className="flex flex-col gap-1">
        <div>
          <h2 className="text-2xl font-bold">Oddswing.bet</h2>
          <h4 className="text-gray-500 dark:text-gray-400">
            UI/UX Designer and Frontend Developer 07/2023 - 12/2023, 03/2024 -
            06/2024
          </h4>
        </div>
        <p>
          • Contributed to the enhancement of a betting assistant application,
          implementing features for notification systems based on Telegram,
          email, and web.
        </p>
        <p>
          • Applied design concepts, actively participated in product,
          prototypes, and technical discussions with team members.
        </p>
        <p>
          • Architected and designed technical solutions, conducted
          comprehensive testing, performed bug fixes, and investigated issues to
          ensure application stability and performance.
        </p>
        <p>
          • Developed a wide range of interactive components, including modals,
          tables, cards, forms, dropdowns, carousels, menus and data
          visualizations, managing complex data effectively; toasts for alert
          notifications and skeleton screens to improve data streaming and user
          experience.
        </p>
        <p>
          • Engineered advanced calculators enabling users to compute and
          forecast odds and profit, maintaining consistency across various odds
          formats (decimal, fractional, american, etc).
        </p>
        <p>
          • Enhanced SEO compliance and performance of different pages, reduced
          unnecessary data fetches by leveraging SWR to ensure efficient data
          handling.
        </p>
        <p>
          • Refactored code to create optimized components and pages, employing
          techniques such as using context to avoid prop drilling, lifting state
          up and creating custom hooks, all while adhering to the DRY principle.
        </p>
        <p>
          • Demonstrated an open-minded approach, incorporating feedback to
          maintain continuous integration processes to streamline development.
        </p>
      </section>
      <Separator />
      <section className="flex flex-col gap-1">
        <div>
          <h2 className="text-2xl font-bold">Swise Software Factory</h2>
          <h4 className="text-gray-500 dark:text-gray-400">
            UI/UX Designer and Frontend Developer 03/2021 - 06/2023
          </h4>
        </div>
        <p>
          • Designed and presented light and dark interactive UX/UI prototypes
          that served as the foundation for developing landing pages and a
          dynamic data visualization system.
        </p>
        <p>
          • Transformed an Excel-based system into a high-performance and
          responsive web application, empowering users to seamlessly visualize
          their data through tables and multiple charts.
        </p>
        <p>
          • Developed ways for restricting sensible data ensuring secure access
          for users, filtering data tables, viewing statistics and downloading
          documents by leveraging resources from REST API endpoints.
        </p>
        <p>
          • Spearheaded the implementation of both PDF and XLSX download
          personalized functionalities, elevating the overall user experience of
          a complex application.
        </p>
      </section>
    </Layout>
  );
}
