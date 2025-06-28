import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, TrendingUp, Package, DollarSign, Users, Eye, Edit, Trash2 } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = [
    { label: 'Total Sales', value: '$24,500', change: '+12%', icon: DollarSign },
    { label: 'Active Listings', value: '18', change: '+3', icon: Package },
    { label: 'Total Views', value: '1,247', change: '+8%', icon: Eye },
    { label: 'Customers', value: '89', change: '+15%', icon: Users },
  ];

  const listings = [
    {
      id: '1',
      name: 'Vintage Gold Watch',
      price: 2499,
      views: 234,
      status: 'Active',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: '2',
      name: 'Diamond Necklace',
      price: 4599,
      views: 189,
      status: 'Active',
      image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: '3',
      name: 'Silk Evening Dress',
      price: 899,
      views: 156,
      status: 'Sold',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Sarah Johnson',
      item: 'Vintage Gold Watch',
      amount: 2499,
      status: 'Shipped',
      date: '2024-01-20',
    },
    {
      id: 'ORD-002',
      customer: 'Michael Chen',
      item: 'Diamond Necklace',
      amount: 4599,
      status: 'Processing',
      date: '2024-01-19',
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'listings', label: 'My Listings' },
    { id: 'orders', label: 'Orders' },
    { id: 'analytics', label: 'Analytics' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">
              Seller Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your luxury marketplace presence
            </p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Plus className="h-5 w-5 mr-2" />
            Add New Listing
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </p>
                          <p className="text-sm text-green-600 dark:text-green-400">
                            {stat.change}
                          </p>
                        </div>
                        <stat.icon className="h-8 w-8 text-gold-500" />
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <GlassCard>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Recent Orders
                  </h3>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {order.customer}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {order.item}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gold-600">
                            ${order.amount.toLocaleString()}
                          </p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.status === 'Shipped'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Performance Chart */}
                <GlassCard>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Sales Performance
                  </h3>
                  <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">
                        Sales chart would go here
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}

          {activeTab === 'listings' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  My Listings
                </h2>
                <Button>
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Listing
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <div className="relative">
                        <img
                          src={listing.image}
                          alt={listing.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <span className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full ${
                          listing.status === 'Active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                        }`}>
                          {listing.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {listing.name}
                          </h3>
                          <p className="text-2xl font-bold text-gold-600">
                            ${listing.price.toLocaleString()}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>{listing.views} views</span>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Order Management
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                        Item
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-900 dark:text-white">
                          {order.id}
                        </td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">
                          {order.customer}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {order.item}
                        </td>
                        <td className="py-3 px-4 font-bold text-gold-600">
                          ${order.amount.toLocaleString()}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.status === 'Shipped'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {new Date(order.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <GlassCard>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Analytics Dashboard
                </h2>
                <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Detailed analytics charts would be displayed here
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                      Including sales trends, customer insights, and performance metrics
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SellerDashboard;