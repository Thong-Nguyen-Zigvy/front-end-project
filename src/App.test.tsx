// Sorry due to the time limit, i only develop a test for fetching data using custom hook

import {QueryClient, QueryClientProvider} from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { useGetShifts } from './module/shifts/hooks/shifts.hooks';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

test("Test fetching data from API", async () => {
  const { result, waitFor } = renderHook(() => useGetShifts(), {
    wrapper: createWrapper()
  });
  await waitFor(() => result.current.isSuccess, { timeout: 8000 })

  expect(result.current.data).toBeDefined()
});
