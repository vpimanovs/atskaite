==========================================================
Mutation example (Add new campaign)        POSTGRAPHILE
==========================================================
mutation {
  createCampaign(input: {campaign: {description: "Campaign123", id: 312, trackingcode: "Tracking Code!"}}) {
    clientMutationId
    campaign {
      description
    }
  }
}

Comments:

1.If you cannot add data to server and it`s shows such error: "insert or update on table \"xxxx\" violates foreign key constraint \"xxxx\", check database data input rules.

==========================================================
Query example (Show all campaigns)         POSTGRAPHILE
==========================================================
query{
  allCampaigns{
    nodes{
      description
      id
      trackingcode
    }
  }
}

==========================================================
Mutation example (Add new campaign)        PRISMA
==========================================================
mutation {
  createCampaign(
    data: { description: "Uznemums 4", trackingcode: "222222222222" }
  ) {
    description
    id
    trackingcode
  }
}

==========================================================
Query example (Show all campaigns)         PRISMA
==========================================================
query {
  campaign(where: { id: 1231 }) {
    description
    id
    trackingcode
  }
}