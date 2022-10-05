import React, { useState } from 'react';
import EmptyList from '../components/common/EmptyList';
import BlogList from '../components/Home/BlogList';
import SearchBar from '../components/Home/SearchBar'; 
import {blogList} from '../config/data';


const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <p className='lead text-primary text-center px-2 py-3'>Find articles about the topics which are trending</p>

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;











// const Home = () => {
//   const [blogs, setBlogs] = useState(blogList);
//   const [searchKey, setSearchKey] = useState('');


//   //search submit function
//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     handleSearchResults()

//   };


//   const handleSearchResults = () => {
//     const allBlogs = blogList;
//     const filteredBlogs = allBlogs.filter( (blog) => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

//     setBlogs(filteredBlogs);
//   }

//   const handClearSearch = () => {
//     setBlogs(blogList);
//     setSearchKey('');
//   }

//   return (
//     <div>
//        {/* Page Header */}
//       <p className='lead text-primary text-center px-2 py-3'>Find articles about the topics which are trending</p>

//       {/* Search Bar */}
//       <SearchBar value={searchKey} clearSearch = {handClearSearch} formSubmit={handleSearchSubmit} handleSearchKey = {e=>setSearchKey(e.target.value)} />

//       {/* Blog list and empty list */}
//     { !blogs.length ? < EmptyList /> : <BlogList blogs={blogs} /> }
    

    
//     </div>
    
//   );
// };

// export default Home;