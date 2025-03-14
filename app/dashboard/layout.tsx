import { AppSidebar } from '@/components/app-sidebar';

import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumbs } from '@/components/breadcrumb';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

type LayoutProps = {
  children: React.ReactNode;
};
export default async function Layout({ children }: LayoutProps) {

  const supabase = await createClient();

  const {
    data: { user }, error
  } = await supabase.auth.getUser();


  if (!user || error) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar email={user?.email} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}