import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, InpuBox, Input, Form } from './SearchForm.module';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();
    // submit(searchQuery);
    setSearchParams({ search: searchQuery });
  };

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };
  useEffect(() => {
    !searchQuery && setSearchQuery(searchParams.get('search'));
  }, [searchParams, searchQuery]);
  if (searchQuery === null) {
    setSearchQuery('');
  }
  return (
    <InpuBox>
      <Form onSubmit={handleSubmit}>
        <Input
          name="search"
          type="text"
          id="exInputSearch"
          onChange={handleChange}
          value={searchQuery}
        />
        <Button type="submit">Search</Button>
      </Form>
    </InpuBox>
  );
};

export default SearchForm;
