// src/pages/LoggedInPage.js
import React from 'react';
import PeopleList from '../components/PeopleList';

const LoggedInPage = () => {
  const people = [
    // Data orang-orang Anda disini
  ];

  return (
    <div className="flex min-h-full justify-center py-12 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="text-2xl font-bold leading-9 text-gray-900">Daftar Orang</h2>
        <PeopleList people={people} />
      </div>
    </div>
  );
};

export default LoggedInPage;
