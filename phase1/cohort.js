const cohort = {
  name: 'Feb2023',
  id: 1234,
  names: ['sarah', 'konrad', 'chang']
 }
 
  const getInfo = (cohort) => {
   return `${cohort.id} - ${cohort.name} - ${cohort.names.length} students in this cohort`
  }
 
 getInfo(cohort);
 