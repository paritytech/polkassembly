import gql from 'graphql-tag';

export const getCouncilMembers= gql`
    query getCouncilMembers{
        councils(last: 1){
            members {
                address
            }
        }
  }
`;
