import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, TrendingUp, Globe, Heart, Award } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Noida, India',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Mumbai, India',
      type: 'Full-time'
    },
    {
      title: 'Customer Support Executive',
      department: 'Support',
      location: 'Delhi, India',
      type: 'Part-time'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Clear career progression and skill development programs'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible work arrangements and work-from-home options'
    },
    {
      icon: Award,
      title: 'Performance Rewards',
      description: 'Recognition and rewards for outstanding performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build the future of e-commerce with us. We're looking for passionate individuals 
            who want to make a difference in how people shop online.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{position.title}</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {position.type}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {position.department}
                    </p>
                    <p className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {position.location}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Don't See Your Role?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <div className="space-y-2 text-gray-600">
            <p>Email your resume to: <strong>careers@solvibe.com</strong></p>
            <p>Or contact our HR team: <strong>+91 98765 43210</strong></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;