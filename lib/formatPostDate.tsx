import dayjs from 'dayjs';

export const formatPostDate = (date: string) => dayjs(date).format('MMM DD');
